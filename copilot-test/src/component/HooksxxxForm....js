import { useState, useCallback, useEffect, useReducer } from 'react'
import axios from 'axios'
import _ from 'lodash'

function HooksForm(props) {
  const formConfigs = props.formConfigs
  console.log(formConfigs)
  const initApi = props.initApi
  if (!props.namespace) {
    // 如果没有命名空间则提示异常
    console.error('namespace is empty, may be will inspect by other form')
  }

  const namespace = props.namespace ? props.namespace : 'default'

  const [state, dispatch] = useReducer(reducer, {
    [`${namespace}.result`]: true,
    [`${namespace}.isLoading`]: true,
  })

  function reducer(state, action) {
    action['newStats'].forEach((item) => {
      state[`${namespace}.${item.name}`] = item.value
    })
    if (action['rely']) {
      const relyStates = getRelyStates(
        action['newStats'],
        state,
        formConfigs,
        namespace
      )
      relyStates.forEach((relyState) => {
        // 判断是否需要依赖切换
        state[`${namespace}.${relyState.name}`] = relyState.value
      })
    }
    return { ...state }
  }

  function changeRelyStates(name, value) {
    const dispatchStats = []
    dispatchStats.push(
      // 添加到待修改状态
      {
        name: `${name}.error`,
        value: !validationCheck(name, value, formConfigs),
      }
    )
    dispatch({ rely: true, newStats: dispatchStats })
  }

  /**
   *
   * 修改状态，并且更新前端信息状态
   * @param {Array}} states
   * @param {boolean} rely
   * @returns
   */
  function changeState(states, rely = true) {
    const dispatchStats = []
    if (!(states instanceof Array)) {
      // 判断是否为数组，不是则返回错误
      return false
    }
    states.forEach((item) => {
      if (!(item instanceof Array)) {
        // 检查合法性
        return
      }
      if (rely) {
        dispatchStats.push(
          // 添加到待修改状态
          {
            name: `${item[0]}.error`,
            value: !validationCheck(item[0], item[1], formConfigs),
          }
        )
      }
      dispatchStats.push(
        // 添加到待修改状态
        {
          name: item[0],
          value: item[1],
        }
      )
    })
    // 统一执行状态变更
    dispatch({ rely: rely, newStats: dispatchStats })
  }

  /**
   * 初始化调用接口，获取初始化数据
   */
  useEffect(() => {
    async function fetchData() {
      const needChangeStats = []
      // if (initApi) {
      //   const res = await axios.get(initApi)
      //   if (!res || !res.data || res.data.ret !== 0) {
      //     // 判断异常，异常显示错误
      //     needChangeStats.push(['result', false])
      //   } else {
      //     // 正常则更新状态
      //     formConfigs.forEach((item) => {
      //       if (res.data.data && res.data.data.hasOwnProperty(item['name'])) {
      //         needChangeStats.push([item['name'], res.data.data[item['name']]])
      //       }
      //     })
      //   }
      // }
      formConfigs.forEach((item) => {
        if (item?.rule?.required) {
          needChangeStats.push([item['key'], ''])
        }
      })
      needChangeStats.push(['isLoading', false])

      const dispatchStats = []
      needChangeStats.forEach((item) => {
        if (!(item instanceof Array)) {
          // 检查合法性
          return
        }
        dispatchStats.push(
          // 添加到待修改状态
          {
            name: `${item[0]}.error`,
            value: !validationCheck(item[0], item[1], formConfigs),
          },
          {
            name: item[0],
            value: item[1],
          }
        )
      })
      // 统一执行状态变更
      dispatch({ rely: true, newStats: dispatchStats })
    }
    fetchData()
  }, [formConfigs]) //确保只执行一次，避免被多次执行

  /**
   * 处理提交，注意这里需要依赖 states 来处理
   */
  const handleSubmit = useCallback(() => {
    let checkRet = true
    let submitInfo = {}

    formConfigs.forEach((item) => {
      if (!checkRet) {
        return
      }

      checkRet =
        checkRet &&
        validationCheck(
          item['key'],
          state[`${namespace}.${item['key']}`],
          formConfigs
        )
      submitInfo[item['name']] = state[`${namespace}.${item['name']}`]
    })
    if (!checkRet) {
      alert('请检查红色报错部分')
    } else {
      alert(JSON.stringify(submitInfo))
    }
  }, [state, formConfigs, namespace])

  if (state[`${namespace}.isLoading`]) {
    return <Loading />
  }
  if (!state[`${namespace}.result`]) {
    return <Error />
  }
  const domInfos = []
  formConfigs.forEach((item) => {
    domInfos.push(
      <Field
        key={item.order}
        label={item.label}
        name={item.key}
        type={item.type}
        value={state[`${namespace}.${item.key}`]}
        changeState={changeState}
        changeRelyStates={changeRelyStates}
        error={state[`${namespace}.${item.key}.error`]}
        display={true}
        errorMsg={item.error}
        rule={item.rule}
      />
    )
  })

  domInfos.push(
    <button key="button" onClick={handleSubmit}>
      提交
    </button>
  )
  return domInfos
}

function Loading() {
  return <div>正在加载数据中...</div>
}

function Error() {
  return <div>失败了， 请稍后重试...</div>
}

const Field = function (params) {
  let inputValue = 'value'
  let rely = false

  switch (
    params.type // 根据类型，选择是否直接处理依赖以及获取值的方式
  ) {
    case 'checkbox':
      inputValue = 'checked'
      rely = true
      break
    case 'text':
    case 'textbox':
    case 'number':
      rely = false
      inputValue = 'value'
      break
    default:
      rely = false
      inputValue = 'value'
  }
  return (
    <div style={{ display: params.display ? 'block' : 'none' }}>
      {params.rule?.required && <span style={{ color: 'red' }}>*</span>}
      <label>{params.label}</label>
      {/* {params.type === 'radio' && */}
      {/* {params.options?.map((option) => {
        return (
          <div>
            <input
              name={params.key}
              type="radio"
              id={params.key}
              value={option.value}
              onChange={(e) => {
                const dataValue = e.target ? e.target[inputValue] : null
                // 直接修改当前状态，并且依赖修改
                params.changeState([[params.name, dataValue]], rely)
                // 如果非依赖，则使用防抖策略
                _.debounce(() => {
                  params.changeRelyStates(params.name, dataValue) //
                }, 500)(params, e)
              }}
              onBlur={(e) => {
                if (!rely) {
                  // 可以选择使用防抖或者 onBlur
                  params.changeRelyStates(params.name, e.target[inputValue])
                }
              }}
            />
            <label for={params.key}>{option.label}</label>
          </div>
        ) */}
      {/* })} */}
      {
        <input
          name={params.key}
          type={params.type}
          value={params.value || params.value === 0 ? params.value : ''}
          onChange={(e) => {
            const dataValue = e.target ? e.target[inputValue] : null
            // 直接修改当前状态，并且依赖修改
            params.changeState([[params.name, dataValue]], rely)
            // 如果非依赖，则使用防抖策略
            _.debounce(() => {
              params.changeRelyStates(params.name, dataValue) //
            }, 500)(params, e)
          }}
          onBlur={(e) => {
            if (!rely) {
              // 可以选择使用防抖或者 onBlur
              params.changeRelyStates(params.name, e.target[inputValue])
            }
          }}
        />
      }
      {params.rule && <label style={{ color: 'red' }}>{params.errorMsg}</label>}
    </div>
  )
}

/**
 * 校验检查，判断是否符合条件
 * @param {string} name
 * @param {string} value
 * @param {array} formConfigs
 * @returns
 */
const validationCheck = function (key, value, formConfigs) {
  if (_.isEmpty(formConfigs)) {
    return true
  }
  const formItem = formConfigs.find((item) => {
    return item.key === key
  })
  if (!formItem || !formItem.rule?.required) {
    return true
  }

  if (_.isEmpty(value) && value !== 0 && value !== true) {
    return false
  }
  return true

  return formItem['validation'].test(value)
}

/**
 * 获取依赖的状态变量，依赖变化后，定位出相应的依赖状态数组
 * @param {array} currentStates
 * @param {function} stateData
 * @param {array} formConfigs
 * @param {string} namespace
 * @returns
 */
const getRelyStates = function (
  currentStates,
  stateData,
  formConfigs,
  namespace
) {
  const newStates = []
  if (_.isEmpty(formConfigs)) {
    return newStates
  }

  let filterCurrentStats = {}
  currentStates.forEach((currentState) => {
    // 将数据结构转换，从数据结构转换为 object
    filterCurrentStats[currentState['name']] = currentState['value']
  })

  formConfigs.forEach((formItem) => {
    // 遍历配置，判断每一项是否需要显示
    newStates.push({
      name: `${formItem['name']}.display`,
      value: checkDisplay(formItem, filterCurrentStats, stateData, namespace),
    })
  })
  return newStates
}

/**
 * 判断是否需要展示该项
 * @param {object} formItem
 * @param {array} filterCurrentStats
 * @param {function} stateData
 * @param {string} namespace
 * @returns
 */
function checkDisplay(formItem, filterCurrentStats, stateData, namespace) {
  if (!formItem['rely'] || formItem['rely'].length < 1) {
    return true
  }
  let enable = true
  for (let i = 0; i < formItem['rely'].length; i++) {
    if (filterCurrentStats.hasOwnProperty(formItem['rely'][i])) {
      // 判断每一项依赖是否符合值，当前状态下
      if (
        filterCurrentStats[formItem['rely'][i]] !== formItem['relyValue'][i]
      ) {
        enable = false
        break
      }
    } else if (
      stateData.hasOwnProperty(`${namespace}.${formItem['rely'][i]}`)
    ) {
      // 判断每一项依赖是否符合值，在 reducer 中的状态
      if (
        stateData[`${namespace}.${formItem['rely'][i]}`] !==
        formItem['relyValue'][i]
      ) {
        enable = false
        break
      }
    } else {
      enable = false
      break
    }
  }
  return enable
}

export default HooksForm

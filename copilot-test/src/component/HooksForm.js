import { useState, useCallback, useEffect, useReducer, useRef } from 'react'
import axios from 'axios'
import { Button, Form, Input, InputNumber, Radio } from 'antd'

function HooksForm({ initData }) {
  const formRef = useRef(null)
  const [obj, setObj] = useState({})
  const FormSection = (configArray, section) => {
    console.log(configArray)
    return configArray.map((item, ndex) => {
      return (
        <>
          {item.type == 'radio' && (
            <Form.Item label="Radio">
              <Radio.Group>
                {item.options.map((option, index) => {
                  return <Radio value={option.value}>{option.label}</Radio>
                })}
              </Radio.Group>
            </Form.Item>
          )}
          {item.type == 'textbox' && (
            <Form.Item
              name={item.key}
              label={item.label}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          )}
        </>
      )
    })
  }
  const onFinish = (values) => {
    console.log(values)
  }

  const displayValue = (obj) => {
    let keys = Object.keys(obj)
    return keys.map((item) => {
      return (
        <div>
          {item}:{obj[item]}
        </div>
      )
    })
  }

  const submit = () => {
    let values = formRef.current.getFieldsValue()
    let keys = Object.keys(values)
    if (keys.some((item) => !values[item])) {
      alert('fill required field')
      return
    }
    setObj(values)
  }

  return (
    <div>
      <h1>Pay Some on new</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        ref={formRef}
      >
        {initData?.map((item, index) => {
          return FormSection(item.components, item.section)
        })}
      </Form>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" onClick={submit}>
          Submit
        </Button>
      </Form.Item>

      <div>{displayValue(obj)}</div>
    </div>
  )
}

export default HooksForm

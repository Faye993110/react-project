import React, {Component} from 'react';
import './style.css';
class Detail extends  Component {
    render(){
        return(
            <div className = 'detailWrapper'>
                <div className = 'header'>
                哲学家阿多诺精华名句22个，胜过一万句毒鸡汤！
                </div>
                <div className = 'content'>
                    <img src = '//upload-images.jianshu.io/upload_images/4391713-33802ec25d93df7d?imageMogr2/auto-orient/strip|imageView2/2/w/324/format/webp'></img>
                    <p><b>西奥多·阿多诺</b></p>
                    <p>  （1903年9月11日—1969年8月6日）德国著名哲学家、美学家、社会学家。生于法兰克福一犹太酒商家庭，卒于瑞士菲斯普。1921年入法兰克福大学攻读哲学、心理学和音乐，1924年获博士学位。法兰克福学派第一代的主要代表人物，社会批判理论的理论奠基者。阿多诺深谙现代音乐，他的音乐批判理论是法兰克福学派社会批判理论中最具特色的。阿多诺一生著述甚丰，涉猎广泛，主要的哲学、美学著作有：《启蒙辩证法》、《新音乐哲学》、《多棱镜：文化批判与社会》、《否定的辩证法》、《美学理论》等。
                    </p>
                </div>
            </div>
        )
    }
}

export default Detail;
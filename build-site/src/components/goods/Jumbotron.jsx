/**
 * 商品链接输入框UI组件
 */
import React from 'react'
import  './Jumbotron.css';

export default ()=>{
    return (
        <div id="add-good">
             <h2>面向大学生的前端技术学习平台demo</h2><br/>
             <small>由百度创办的免费前端技术学习实践、交流、分享平台</small>
            <div className="jumbotron-btn">
                <a href="http://ife.baidu.com/" target="_blank" className="btn btn-default">进入百度学院官网</a>
                <a  href="https://github.com/giscafer/ife-course-demo" target="_blank" className="btn btn-default">习题demo源码</a>
            </div>
        </div>
    )
}
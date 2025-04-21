import React from 'react'

// 创建两个关于密码是否可见组件
const ValidPasswords = () => <h1>Valid Password</h1>
const InValidPasswords = () => <h1>InValid Password</h1>

// 创建一个Password条件渲染组件
const Password = ({isValid}) =>{
  return isValid?<ValidPasswords />:<InValidPasswords />
}

const App = () => {
  return (
    <section>
      <Password isValid = {true}/>
    </section>
  )
}

export default App
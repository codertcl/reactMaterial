import React, {useState} from "react";

export default function ComplexHookState() {
    console.log('dom渲染')
    //Hook:useState函数
    const [friends, setFriends] = useState(['冰冰', 'sxy'])
    const [students, setStudents] = useState([
        {id:1,name: '冰冰', age: 31},
        {id:2,name: 'sxy', age: 22},
        {id:3,name: '饼饼', age: 8}
    ])

    //只能通过setFriends来进行数据修改
    //直接修改friends修改数据,不会触发DOM更新
    function addFriend() {
        friends.push('张扬')
        // 对比传入的参数和现在的friends 没有发生变化则不会重新渲染，但friends发生了变化
        setFriends(friends)
        //friends已经更新
        console.log(friends)
    }

    //正确修改对象和数组的方式是通过临时变量
    function incrementAgeStdents(index) {
        let newStu = [...students]
        newStu[index].age += 1
        setStudents(newStu)
    }

    return (
        <div>
            <ul>
                {
                    friends.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
            <button onClick={e => setFriends([...friends, '饼饼'])}>添加朋友1</button>
            <button onClick={e => addFriend()}>添加朋友</button>

            <hr/>
            <ul>
                {
                    students.map((item, index) => {
                        return (<li key={item.id}>
                            <span>姓名:{item.name} 年龄:{item.age}</span>
                            <button onClick={e => incrementAgeStdents(index)}>change</button>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

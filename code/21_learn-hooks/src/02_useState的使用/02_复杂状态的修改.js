import React, {useState} from "react";

export default function ComplexHookState() {
    //Hook:useState函数
    const [friends, setFriends] = useState(['冰冰', 'sxy'])
    const [students, setStudents] = useState([
        {name: '冰冰', age: 31},
        {name: 'sxy', age: 22}
    ])

    //只能通过setFriends来进行数据修改
    function addFriend() {
        friends.push('张扬')
        // 对比传入的参数和现在的friends 没有发生变化则不会重新渲染，但friends发生了变化
        setFriends(friends)
        console.log(friends)
    }

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

import React, {useEffect, useState} from "react";
import qs from "qs";
import {SearchPanel} from "./serach-panel";
import {List} from './list'
import {cleanObject, useDebounce, useMount} from "../utils";

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])

    const [param, setParam] = useState({
        name: "",
        personId: ''
    })
    const [list, setList] = useState([])

    const debounceParam = useDebounce(param, 2000)
    //获取list数据 进行防抖处理避免因输入框内输入值变化频繁网络请求
    useEffect(() => {
        // fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.personId}`).then(async res => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            console.log(param)
            // console.log('projects', res)
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [debounceParam])//debounceParam变化即重新获取数据

    //获取user数据
    //只需要在componentWillMount内获取一次
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            console.log('users', res)
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    })
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List users={users} list={list}/>
        </div>
    )
}

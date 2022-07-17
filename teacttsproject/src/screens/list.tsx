import React from "react";
import {User} from "./serach-panel";

interface Project {
    id: number,
    name: string,
    personId: string,
    pin: boolean,
    organization: string
}

interface ListProps {
    list: Project[],
    users: User[]
}

export const List = ({users, list}: ListProps) => {
    return (
        <table>
            <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
            </thead>
            <tbody>
            {
                list.map((project) =>
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{users.find(user => user.id === Number(project.personId))?.name || '未知'}</td>
                    </tr>)
            }
            </tbody>
        </table>
    )
}

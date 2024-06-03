import {Collapse} from "antd";
import ChooseLocation from "./ChooseLocation.jsx";
import ChooseFilms from "./ChooseFilms.jsx";
import ChooseDate from "./ChooseDate.jsx";
import {DownCircleTwoTone, UpCircleTwoTone} from "@ant-design/icons";
import React from "react";

const items = [
    {
        key: '1',
        label: "Chọn Vị Trí",
        children: (
            <ChooseLocation/>
        ),
        style: {
            marginBottom: '25px',
            borderRadius: '10px',
            backgroundColor: 'white',
        }
    },
    {
        key: '2',
        label: "Chọn Phim",
        children: (
            <ChooseFilms></ChooseFilms>
        ),
        style: {
            marginBottom: '25px',
            borderRadius: '10px',
            backgroundColor: 'white',
        }
    },
    {
        key: '3',
        label: "Chọn Ngày",
        children: (
            <ChooseDate></ChooseDate>
        ),
        style: {
            marginBottom: '25px',
            borderRadius: '10px',
            backgroundColor: 'white',
        }
    },
]

const CollapseMenu = () => {
    return (
        <Collapse items={items} bordered={false}
                  expandIcon={({ isActive }) =>
                      isActive ? <DownCircleTwoTone/> : <UpCircleTwoTone />
                  }
                  expandIconPosition="end"
                  className={'select-none w-full'}
        />

    )
}

const ChooseTicket = () => {
    return (
        <CollapseMenu/>
    )
}

export default ChooseTicket
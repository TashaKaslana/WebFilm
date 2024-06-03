import React, {createContext, useState} from 'react';
import {Tabs, Layout, Flex} from 'antd';
import SideBill from './SideBill.jsx';
import {useLocalStorage} from "../../../utils/useLocalStorage.jsx";
import ChooseSeat from "./ChooseSeat/ChooseSeat.jsx";
import ChooseTicket from "./ChooseTicket/ChooseTicket.jsx";
import ChooseFood from "./ChooseFood/ChooseFood.jsx";
import Payment from "./Payment/Payment.jsx";
import Confirmation from "./Confirmation/Confirmation.jsx";


const UserData = createContext(null);

const CinemaTicket = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [storedData, setStoredData] = useLocalStorage('bills', ''); // luu tru
    const [currentImg, setCurrentImg] = useState(null);

    const [billData, setBillData] = useState({
            location: '',
            date: '',
            film: '',
            foods: [],
            quantity: 0,
            seat: '',
            price: 0,
            time: '',
            agency: '',
        }
    ) // cho giao dien

    const updateFoodQuantity = (currentFoods, foodObject) => {
        // tim neu ton tai
        const existingIndex = currentFoods.findIndex(
            (food) => food.name === foodObject.name
        );

        if (existingIndex !== -1) {
            // cap nhat so luong cho ton tai san co
            const updatedFoodList = [...currentFoods];
            updatedFoodList[existingIndex] = {
                ...updatedFoodList[existingIndex],
                quantity: foodObject.quantity
            };
            return updatedFoodList;
        } else {
            // them vao voi so luong ???
            return [...currentFoods, foodObject];
        }
    };


    const handleChangeData = (type, value) => {
        if (type === 'foods') {
            // cap nhat danh sach food
            const updatedFoods = updateFoodQuantity(billData.foods, value);
            console.log(updatedFoods)


            setBillData((prevData) => ({
                ...prevData,
                foods: updatedFoods
            }));

            setStoredData((prevData) => ({
                ...prevData,
                foods: updatedFoods
            }))

        } else {
            setBillData((prevData) => ({
                ...prevData,
                [type]: value
            }))

            setStoredData((prevData) => ({
                ...prevData,
                [type]: value
            }))
        }

        console.log('#1 ' + type + ' ' + value)
    }

    const handleChangeDataMulti = (updates) => {
        const updateFoods = updates.foods !== undefined;

        if (updateFoods) {
            const updatedFoods = updateFoodQuantity(billData.foods, updates.foods);
            updates.foods = updatedFoods;
        }

        setBillData((prevData) => ({
            ...prevData,
            ...updates
        }));

        setStoredData((prevData) => ({
            ...prevData,
            ...updates
        }));

        console.log(updates);
    };


    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    const tabItems = [
        {
            key: '1',
            label: 'Chọn phim/ Rạp/ Suất',
            children:
                <Flex>
                    <Flex className={'w-[70%] p-1'}>
                        <ChooseTicket handleChangeData={handleChangeData}/>
                    </Flex>
                    <Flex className={'w-[30%] px-5'}>
                        <SideBill setActiveTab={setActiveTab} activeTab={activeTab} bill={billData}/>
                    </Flex>
                </Flex>,
        },
        {
            key: '2',
            label: 'Chọn ghế',
            children:
                <Flex>
                    <Flex className={'w-full p-1'}>
                        <ChooseSeat/>
                    </Flex>
                    <Flex className={'w-[30%] px-5'}>
                        <SideBill setActiveTab={setActiveTab} activeTab={activeTab} bill={billData}/>
                    </Flex>
                </Flex>,
        },
        {
            key: '3',
            label: 'Chọn đồ ăn',
            children:
                <Flex>
                    <Flex className={'w-3/4 p-1'}>
                        <ChooseFood/>
                    </Flex>
                    <Flex className={'w-1/4'}>
                        <SideBill setActiveTab={setActiveTab} activeTab={activeTab} bill={billData}/>
                    </Flex>
                </Flex>,
        },
        {
            key: '4',
            label: 'Thanh toán',
            children:
                <Flex>
                    <Flex className={'w-3/4 p-1'}>
                        <Payment/>
                    </Flex>
                    <Flex className={'w-1/4'}>
                        <SideBill setActiveTab={setActiveTab} activeTab={activeTab} bill={billData}/>
                    </Flex>
                </Flex>,
        },
        {
            key: '5',
            label: 'Xác nhận',
            children:
                <Flex>
                    <Confirmation/>
                    <SideBill setActiveTab={setActiveTab} activeTab={activeTab} bill={billData}/>
                </Flex>,
        },
    ];

    return (
        <UserData.Provider value={{billData, setBillData, handleChangeData, currentImg, setCurrentImg, handleChangeDataMulti}}>
            <Layout className="bg-amber-50 h-full">
                <Tabs
                    activeKey={activeTab}
                    onChange={handleTabChange}
                    items={tabItems}
                    tabBarStyle={{backgroundColor: 'white', padding: '1rem'}}
                />
            </Layout>
        </UserData.Provider>

    );
};

export default CinemaTicket;
export {UserData};

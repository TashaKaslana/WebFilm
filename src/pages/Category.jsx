import style from '/src/assets/styleCategory.module.css';
import Header from "../layouts/Header/Header.jsx";
import Footer from "../layouts/Footer/Footer.jsx";

const Main = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>PHIM ĐIỆN ẢNH</h1>
            </div>
            <div className={style.filters}>
                <select className={'border border-gray-500 h-10'}>
                    <option>Thể Loại</option>
                    <option>Kinh dị</option>
                </select >
                <select className={'border border-gray-500 h-10'}>
                    <option>Quốc Gia</option>
                    <option>Việt Nam</option>
                </select>
                <select className={'border border-gray-500 h-10'}>
                    <option>Năm</option>
                    <option>2077</option>
                </select>
                <select className={'border border-gray-500 h-10'}>
                    <option>Đang Chiếu/Sắp Chiếu</option>
                </select >
                <select className={'border border-gray-500 h-10'}>
                    <option>Xem Nhiều Nhất</option>
                </select>
            </div>
            <div className={style.movies}>
                <div className={style.container_movie}>
                    <div className={style.movie}>
                        <img src="src/assets/imgs/fate_stay_night_heaven_s_feel_ii_lost_butterfly_5719.webp"
                             alt="fate_stay_night_heaven_s_feel_ii_lost_butterfly_5719"/>
                        <div className={style.movie_info}>
                            <h3>Fate/stay night: Heaven's Feel II. Lost Butterfly</h3>
                            <p>Emiya Shirou một chàng pháp sư trẻ tuổi học tại học viện Homurahara tại thành phố
                                Fuyuki. Một
                                ngày nọ, khi đang dọn dẹp võ đường ở trường cậu vô tình nhìn thấy một trận chiến của
                                những kẻ có
                                sức mạnh hơn người. Để tìm hiểu và ngăn cản kẻ xấu đoạt được Chén Thánh cậu quyết
                                định tham gia
                                cuộc chiến này để cứu những người dân vô tội. Thế nhưng, mọi chuyện bắt đầu chuyển
                                biến xấu khi
                                một “Bóng ma” xuất hiện và giết vô số người ở Fuyuki….</p>

                            <div className={style.ppa}>
                                <button className={style.buton1}> Like</button>

                                <p>👁 999999999999</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.movie}>
                        <img
                            src="src/assets/imgs/Fate-Grand-Order-Shinsei-Entaku-Ryoiki-Camelot-Wandering-Agateram-Visual-002-20191006-1.webp"
                            alt="Fate-Grand-Order-Shinsei-Entaku-Ryoiki-Camelot-Wandering-Agateram-Visual"/>
                        <div className={style.movie_info}>
                            <h3>Fate/Grand-Order Shinsei Entaku Ryoiki Camelot Wandering Agateram</h3>
                            <p>Hiệp sĩ lang thang Bedivere cuối cùng cũng đến được điểm cuối của hành trình lang
                                thang của mình.
                                Năm 1273 Trước Công Nguyên tại Jerusalem. Đất Thánh đã trở thành một hoang mạc vĩ
                                đại, người dân
                                bị buộc phải rời quê hương, và có ba thế lực đang giao đấu với nhau tại nơi vùng đất
                                hoang vu
                                này. Hội Hiệp Sĩ Bàn Tròn đã tụ tập lại để bảo vệ Đất Thánh và Vua Sư Tử của họ. Với
                                cả Vương
                                quốc mình bị triệu hồi tới vùng đất xa lạ, Ozymandia, Vua Mặt Trời, đã lặng lẽ chống
                                lại sự bạo
                                ngược của thành trì kì lạ đó. Những người dân vùng núi, những người bảo vệ cho những
                                nạn nhân bị
                                tước đoạt đất đai, đang đợi chờ cơ hội kháng chiến. Để hoàn tất sứ mạng của mình,
                                Bedivere tới
                                Đất Thánh nơi Vua Sư Tử trị vì, nơi anh gặp vị Master cuối cùng của loài người –
                                Ritsuka
                                Fujimaru, cùng với Demi-Servant của anh ta – Mash Kyrielight, đã tới Jerusalem, với
                                mục đích
                                khôi phục lịch sử nhân loại. Bedivere tham gia cùng với Fujimaru và đồng đội để thực
                                hiện nhiệm
                                vụ này.</p>
                            <div className={style.ppa}>
                                <button className={style.buton1}> Like</button>

                                <p>👁 88888888888</p>
                            </div>
                        </div>

                    </div>
                    <div className={style.movie}>
                        <img src="src/assets/imgs/unnamed (1).png" alt="Sword Art Online the Movie: Ordinal Scale"/>
                        <div className={style.movie_info}>
                            <h3>Sword Art Online the Movie: Ordinal Scale</h3>
                            <p>Vào năm 2022, thế giới đã cải thiện được công nghệ Virtual Reality bởi nhà phát triển
                                thiên tài
                                Kayaba Akihiko. Với thiết bị NerveGear – hệ thống full-dive đầu tiên, con người đã
                                có thể đi vào
                                thế giới VRMMORPGs. Năm 2026, một thiết bị mới với tên “Augma” được phát triển để
                                cạnh tranh với
                                “tiền bối” của mình – NerveGear bằng thành công của mình, Amusphere. Augma có thể
                                trực tiếp đeo
                                trên người, và tất nhiên cũng không có chức năng full-dive như NerveGear, thay thế
                                bằng cách sử
                                dụng hệ thống Augmented Reality để đưa người chơi vào game. An toàn, thân thiện mà
                                người chơi
                                vẫn còn giữ được tỉnh táo cho dù mình đang ở trong game, ngay tức khắc trở thành
                                “tôm tươi” trên
                                thị trường. Game được phổ biến nhất ở hệ thồng này là “Ordinal Scale” (aka: OS), một
                                game
                                ARMMORPG độc quyền của Augma. Asuna và những người bạn đã thử chơi OS một thời gian,
                                nên Kirito
                                đã quyết định tham gia cùng họ. Tuy rằng có thể Ordinal Scale sẽ không hẳn là một
                                game “vui vẻ”
                                như họ mong đợi…</p>
                            <div className={style.ppa}>
                                <button className={style.buton1}> Like</button>

                                <p>👁 77777777</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-left">
                    <div className={style.quick_buy}>
                        <h3>Mua Vé Nhanh</h3>
                        <select className={'border border-gray-500'}>
                            <option>Chọn phim</option>
                        </select >
                        <select className={'border border-gray-500'}>
                            <option>Chọn rạp</option>
                        </select>
                        <select className={'border border-gray-500'}>
                            <option>Chọn ngày</option>
                        </select>
                    </div>
                    <div className={style.now_showing}>
                        <h3 className={'font-bold text-xl'}>PHIM ĐANG CHIẾU</h3>
                        <img
                            src="src/assets/imgs/Fate-Grand-Order-Shinsei-Entaku-Ryoiki-Camelot-Wandering-Agateram-Visual-002-20191006-1.webp"
                            alt="Fate-Grand-Order-Shinsei-Entaku-Ryoiki-Camelot-Wandering-Agateram-Visual"/>
                        <div >
                            <h3 className={'font-bold'}>Fate/Grand-Order Shinsei Entaku Ryoiki Camelot Wandering Agateram</h3>
                            <p>Hiệp sĩ lang thang Bedivere cuối cùng cũng đến được điểm cuối của hành trình lang
                                thang của mình.
                                Năm 1273 Trước Công Nguyên tại Jerusalem. Đất Thánh đã trở thành một hoang mạc vĩ
                                đại, người dân
                                bị buộc phải rời quê hương, và có ba thế lực đang giao đấu với nhau tại nơi vùng đất
                                hoang vu
                                này. Hội Hiệp Sĩ Bàn Tròn đã tụ tập lại để bảo vệ Đất Thánh và Vua Sư Tử của họ. Với
                                cả Vương
                                quốc mình bị triệu hồi tới vùng đất xa lạ, Ozymandia, Vua Mặt Trời, đã lặng lẽ chống
                                lại sự bạo
                                ngược của thành trì kì lạ đó. Những người dân vùng núi, những người bảo vệ cho những
                                nạn nhân bị
                                tước đoạt đất đai, đang đợi chờ cơ hội kháng chiến. Để hoàn tất sứ mạng của mình,
                                Bedivere tới
                                Đất Thánh nơi Vua Sư Tử trị vì, nơi anh gặp vị Master cuối cùng của loài người –
                                Ritsuka
                                Fujimaru, cùng với Demi-Servant của anh ta – Mash Kyrielight, đã tới Jerusalem, với
                                mục đích
                                khôi phục lịch sử nhân loại. Bedivere tham gia cùng với Fujimaru và đồng đội để thực
                                hiện nhiệm
                                vụ này.</p>
                        </div>
                        <div className={style.rating}>9.7*</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Category = () => {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}

export default Category

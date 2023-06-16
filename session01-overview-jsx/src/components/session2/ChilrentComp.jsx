import React, { Component } from 'react';
// State : 
// dùng để lưu trữ dữ liệu trong component đó => có thể thay đổi được dữ liệu
// để sử dụng được state cần khai báo lớp bằng constructor
// và sử dụng super để gọi nó
// để cập nhập lại state => sử dụng setState
class ChilrentComp extends Component {
    constructor() {
        super();
        this.state = {
            studentA: " nam anh",
            question: " đang làm gì",
            anwser: "không",
            display: true,
        }
    }

    // sử dụng với arrow function
    handleChangeState = () => {
        this.setState({
            anwser: "có"
        })
    }

    // khi sử dụng với function thường phải định nghĩa từ khóa this ko nó sẽ không hiểu
    // handleChangeState() {
    //     this.setState({
    //         anwser: "có"
    //     })
    // }


    handleToggleDisplay = () => {
        this.setState({
            display: !this.state.display,
        })
    }
    render() {
        return (
            <div>
                <h2>State</h2>
                <p>{this.state.studentA}</p>
                <p>
                    {this.state.question} - {this.state.anwser}
                </p>
                {/* quy tắc đặt tên :
                với các hàm xử lý 1 vc gì đó => sẽ có tiền tố trước là handle 
                với các hàm xử lý 1 sự kiện gì đó => sẽ có tiền tố là on
                */}
                <button onClick={this.handleChangeState}>Click</button>

                {/* Cập nhập state liên tục */}
                {/* ? và : là if và else */}
                {this.state.display ? (
                    <div>
                        <p>a bách sp nhiệt tình ko ?</p>
                        <p>có</p>
                        <button onClick={this.handleToggleDisplay}>Click</button>
                    </div>
                ) : (
                    <div>
                        <p>a bách sp nhiệt tình ko ?</p>
                        <p>không</p>
                        <button onClick={this.handleToggleDisplay}>Click</button>
                    </div>
                )}
            </div>
        );
    }
}

export default ChilrentComp;
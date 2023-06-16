import React, { Component } from 'react';

class Event extends Component {
    // event with arrow function
    handleClick1 = () => {
        console.log("click 1");
    }

    // trong JSX khi sử dụng 1 sự kiện  => nếu sử dụng theo kiểu 'handleClick2()' 
    // thì hàm sẽ được chạy ngay sau khi component render
    handleClick2 = () => {
        console.log("click 2");
    }

    handleClick3 = () => {
        console.log("click 3");
    }

    handleClick4 = (element) => {
        console.log("click 4");
        console.log(element);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick1}>Click1</button>
                <button onClick={this.handleClick2()}>Click2</button>
                <button onClick={() => this.handleClick3}>Click3</button>
                <button onClick={() => this.handleClick4("helo")}>Click4</button>
            </div>
        );
    }
}

export default Event;
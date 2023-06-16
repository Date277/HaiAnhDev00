import React, { Component } from 'react';

class DemoJSX extends Component {
    render() {
        const greeting = "Học viên"
        const people = {
            name: "hàn",
            course: "ReactJS",
            age: 30,
        };
        return (
            <div>
                {/* phép nội suy trong jsx */}
                {/* Lưu ý : 
                + class => className
                + các thuộc tính sẽ được viết theo camelCase
                ví dụ : background-color => backgroundColor 
                + các sự kiện cũng sẽ viết theo camelCase 
                ví dụ : onclick => onClick , onchange => onChange
                 */}
                <h1 style={{ backgroundColor: 'pink' }} className='game'>{greeting}</h1>
                <p>Tên học viên : {people.name} - Khóa học : {people.course} - Tuổi : {people.age}</p>
            </div>
        );
    }
}

export default DemoJSX;
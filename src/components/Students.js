import React from 'react';

function Students() {

    const studentsData = [
        { name: 'John', age: 24, course: 'MERN', batch: 'October' },
        { name: 'Doe', age: 25, course: 'MERN', batch: 'November' },
        { name: 'Biden', age: 26, course: 'MERN', batch: 'September' },
        { name: 'Barar', age: 22, course: 'MERN', batch: 'September' },
        { name: 'Christ', age: 23, course: 'MERN', batch: 'October' },
        { name: 'Elent', age: 24, course: 'MERN', batch: 'November' },
    ];

    return (
        <div>
            <h1 className='pages'>Student page!!</h1>
            <div className='table'>
                <table className='tableStyle' rules='rows' >
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Course</td>
                            <td>Batch</td>
                            <td>Change</td>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.course}</td>
                                <td>{student.batch}</td>
                                <td>Edit</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Students;

import React from 'react';

function Students() {
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
                        <tr>
                            <td>John</td>
                            <td>24</td>
                            <td>MERN</td>
                            <td>October</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td>Doe</td>
                            <td>25</td>
                            <td>MERN</td>
                            <td>November</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td>Biden</td>
                            <td>26</td>
                            <td>MERN</td>
                            <td>September</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td>Barar</td>
                            <td>22</td>
                            <td>MERN</td>
                            <td>September</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td>Christ</td>
                            <td>23</td>
                            <td>MERN</td>
                            <td>October</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td>Elent</td>
                            <td>24</td>
                            <td>MERN</td>
                            <td>November</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Students;

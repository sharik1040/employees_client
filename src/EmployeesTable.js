import { connect } from 'react-redux';
import { getEmployees } from './js/actions/index';
import EmployeeTableRow from './EmployeesRow';
import './style.css';
import { useEffect } from 'react';

const mapStateToProps = state => {
    return { employees: state.employees, headers: state.headers }
};

const mapDispatchToProps = { getEmployees }

const ConnectedEmployeeTable = ({employees, headers, getEmployees}) => {
    useEffect(() => {
        getEmployees();
    }, [employees])

    const employeeBody = employees.map((item, index) => {
        const itemPosition = index + 1;
        const {_id} = item;
        return <EmployeeTableRow key={_id}
                                 index={itemPosition}
                                 item={item}/>
    });
    const headerBody = headers.map(header => {
        const {id, content} = header;
        return <th key={id}>{content}</th>
    })
    return (
        <table className="employee-table">
            <thead>
                <tr>
                    {headerBody}
                </tr>
            </thead>
            <tbody>
                {employeeBody}
            </tbody>
        </table>
    )
}

const EmployeesTable = connect(mapStateToProps, mapDispatchToProps)(ConnectedEmployeeTable);

export default EmployeesTable;
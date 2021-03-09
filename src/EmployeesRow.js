import { useState } from 'react';
import InputText from './Form/InputText';
import InputDate from './Form/InputDate';
import InputSelect from './Form/InputSelect';
import InputRange from './Form/InputRange';
import del from './images/delete.png';
import update from './images/update.jpg';
import save from './images/save.png';
import './style.css';
import genderType from './gender-type.json';
import positions from './positions.json';

const removeEmployee = async (id) => {
    let response = await fetch(`https://employeesserver.herokuapp.com/employees/${id}`, { method: 'DELETE' })
    let data = await response.json();
    return data;
}

const updateEmployee = async (currentEmployee) => {
    const { _id } = currentEmployee;
    let response = await fetch(`https://employeesserver.herokuapp.com/employees/${_id}`, { method: 'PUT',
        body: JSON.stringify(currentEmployee) });
    let data = await response.json();
    return data;
}

const EmployeeTableRow = ({index, item}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [fullName, setFullName] = useState(item.fullName);
    const [birth, setBirth] = useState(item.birth);
    const [gender, setGender] = useState(item.gender);
    const [contact, setContact] = useState(item.contact);
    const [position, setPosition] = useState(item.position);
    const [salary, setSalary] = useState(item.salary);
    const [income, setIncome] = useState(item.income);

    const labelClassName = "input-wrapper__label--none";
    const inputClassName = "input-wrapper__input input-wrapper__input--full-width";
    const smallTdClassName = "employee-table__td--small";
    const mediumTdClassName = "employee-table__td--medium";

    const handleUpdateClick = () => {
        if(isUpdate){
            const currentEmployee = {fullName, birth, gender, contact, position, salary, income}; 
            currentEmployee._id = item._id;
            updateEmployee(currentEmployee);
        }
        setIsUpdate(!isUpdate);
    }

    const handleDeleteClick = (id) => {
        removeEmployee(id)
    }

    const handleFullNameChange = (newFullName) => {
        setFullName(newFullName);
    }

    const handleBirthDateChange = (newBirthDate) => {
        setBirth(newBirthDate);
    }

    const handleIncomeDateChange = (newIncomeDate) => {
        setIncome(newIncomeDate);
    }

    const handleContactChange = (newContact) => {
        setContact(newContact);
    }

    const handleGenderChange = (newGender) => {
        setGender(newGender);
    }

    const handlePositionChange = (newPosition) => {
        setPosition(newPosition);
    }

    const handleSalaryChange = (newSalary) => {
        setSalary(newSalary);
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    }

    const formatSalary = (salary) => {
        return `\$${salary}`;
    }

    return (
        <tr className="employee-table__row">
            <td>{index}</td>
            <td>{isUpdate ? <InputText initialValue={fullName}
                                       id="fullName"
                                       labelClassName={labelClassName}
                                       inputClassName={inputClassName}
                                       onValueChange={handleFullNameChange}/> : <span>{fullName}</span>}</td>
            <td>{isUpdate ? <InputDate initialValue={formatDate(birth)}
                                       id="birth"
                                       labelClassName={labelClassName}
                                       inputClassName={inputClassName}
                                       onValueChange={handleBirthDateChange}/> : <span>{formatDate(birth)}</span>}</td>
            <td className={smallTdClassName}>{isUpdate ? <InputSelect id="gender"
                                         initialValue={gender}
                                         labelClassName={labelClassName}
                                         inputClassName={inputClassName}
                                         options={genderType}
                                         onValueChange={handleGenderChange}/> : <span>{gender}</span>}</td>
            <td className={mediumTdClassName}>{isUpdate ? <InputText initialValue={contact}
                                       id="contact"
                                       labelClassName={labelClassName}
                                       inputClassName={inputClassName}
                                       pattern="\+38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                                       onValueChange={handleContactChange}/> : <span>{contact}</span>}</td>
            <td>{isUpdate ? <InputSelect id="position"
                                         initialValue={position}
                                         labelClassName={labelClassName}
                                         inputClassName={inputClassName}
                                         options={positions}
                                         onValueChange={handlePositionChange}/> : <span>{position}</span>}</td>
            <td className={smallTdClassName}>{isUpdate ? <InputRange id="salary"
                                        initialValue={salary}
                                        labelClassName={labelClassName}
                                        inputClassName={inputClassName}
                                        onValueChange={handleSalaryChange} /> : <span>{formatSalary(salary)}</span>}</td>
            <td>{isUpdate ? <InputDate initialValue={formatDate(income)}
                                       id="income"
                                       labelClassName={labelClassName}
                                       inputClassName={inputClassName}
                                       onValueChange={handleIncomeDateChange}/> : <span>{formatDate(income)}</span>}</td>

            <td className="employee-table___setup">
                <button onClick={() => handleUpdateClick(item._id)}
                        className='setup-btns__btn setup-btns__update'>
                    {isUpdate ? <img src={save} alt="Save" className="btn-img"/> : 
                                <img src={update} alt="Update" className="btn-img"/>}
                </button>
                <button onClick={() => handleDeleteClick(item._id)}
                    className="setup-btns__btn setub-btns__delete">
                    <img src={del} 
                        alt="Delete" 
                        className="btn-img"/>
                </button>
            </td>

        </tr>
    )
}

export default EmployeeTableRow;
import { useState } from 'react';
import InputDate from './Form/InputDate';
import InputSelect from './Form/InputSelect';
import InputText from './Form/InputText';
import InputRange from './Form/InputRange';
import positions from './positions';
import genderType from './gender-type';
import './style.css';

const addNewEmployee = async (newEmployee) => {
    let response = await fetch("https://employeesserver.herokuapp.com/employees/add", {
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEmployee)
    });
    let data = await response.json();
    return data;
}


const EmployeeForm = () => {
    const [fullName, setFullName] = useState('Sharnenkova Anastasia Stanislavovna');
    const [birth, setBirth] = useState('07/25/1995');
    const [gender, setGender] = useState('female');
    const [contact, setContact] = useState('+380952345678');
    const [position, setPosition] = useState('developer');
    const [salary, setSalary] = useState(110);
    const [income, setIncome] = useState(new Date().toLocaleDateString());
    const labelClassName = "input-wrapper__label";
    const inputClassName = "input-wrapper__input";

    const handleClick = () => {
        const newEmployee = {fullName, birth, gender, contact, position, salary, income}; 
        const employees = addNewEmployee(newEmployee);
        console.log(employees);
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

    return (
        <div className="form">
            <div className="form__item">
                <InputText label="Full Name:"
                           id="fullName"
                           placeholder="Input full name" 
                           labelClassName={labelClassName}
                           inputClassName={inputClassName}
                           onValueChange={handleFullNameChange}/>
            </div>
            <div className="form__item">
                <InputDate label="Date of birth:"
                           id="birth"
                           labelClassName={labelClassName}
                           inputClassName={inputClassName}
                           onValueChange={handleBirthDateChange}/>
            </div>
            <div className="form__item">
                <InputSelect label="Gender:"
                             id="gender"
                             options={genderType}
                             labelClassName={labelClassName}
                             inputClassName={inputClassName}
                             onValueChange={handleGenderChange}/>
            </div>
            <div className="form__item">
                <InputText label="Contact:"
                           id="contact"
                           placeholder="+380XX-XXX-XX-XX" 
                           labelClassName={labelClassName}
                           inputClassName={inputClassName}
                           pattern="\+38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                           onValueChange={handleContactChange}/>
            </div>
            <div className="form__item">
                <InputSelect label="Position:"
                             id="position"
                             options={positions}
                             labelClassName={labelClassName}
                             inputClassName={inputClassName}
                             onValueChange={handlePositionChange}/>
            </div>
            <div className="form__item">
                <InputRange label="Salary:"
                            id="salary"
                            labelClassName={labelClassName}
                            inputClassName={inputClassName}
                            onValueChange={handleSalaryChange} />
            </div>
            <div className="form__item">
                <InputDate label="Income date:"
                           id="income"
                           labelClassName={labelClassName}
                           inputClassName={inputClassName}
                           onValueChange={handleIncomeDateChange}/>
            </div>
            <div className="form__item">
                <button onClick={handleClick}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EmployeeForm;
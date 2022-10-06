import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function BmiForm() {
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [BMI, setBMI] = useState<number>(0);
    const [message, setMessage] = useState<string>(
        'Enter a valid height and weight to calculate your BMI'
    );

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (height !== 0 && weight !== 0) {
            const divided = weight;
            const final = divided / (height ^ 2);
            setBMI(final);
        }
    };

    useEffect(() => {
        if (BMI < 18.5 && BMI !== 0) {
            setMessage('UnderWeight');
        }
        if (BMI >= 18.5 && BMI <= 24.9) {
            setMessage('Normal weight');
        }
        if (BMI > 25 && BMI <= 29.9) {
            setMessage('Overweight');
        }
        if (BMI >= 30) {
            setMessage('Obesity');
        }
    }, [BMI]);

    return (
        <Container>
            <p>{message}</p>
            <p>Your BMI is {BMI.toFixed(2)}</p>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="height">
                    Height in meters
                    <input
                        type="number"
                        name="height"
                        value={height}
                        onChange={(e) => setHeight(parseFloat(e.target.value))}
                    />
                </label>
                <label htmlFor="weight">
                    Weight in Kg
                    <input
                        type="number"
                        name="weight"
                        value={weight}
                        onChange={(e) => setWeight(parseFloat(e.target.value))}
                    />
                </label>
                <button>Submit</button>
            </Form>
        </Container>
    );
}
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 10em;
    width: 15em;
`;

const Container = styled.div``;
export default BmiForm;

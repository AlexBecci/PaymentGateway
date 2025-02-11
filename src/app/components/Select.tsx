import { useEffect, useState } from 'react';

const Select = () => {
    const [currencies, setCurrencies] = useState<string[]>([]);
    const [selectedCurrency, setSelectedCurrency] = useState<string>('');

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await fetch('/api/currencies');
                const data = await response.json();
                setCurrencies(data);
            } catch (error) {
                console.error('Error fetching currencies:', error);
            }
        };

        fetchCurrencies();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <select value={selectedCurrency} onChange={handleChange}>
            <option value="">Select a cryptocurrency</option>
            {currencies.map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
        </select>
    );
};

export default Select;
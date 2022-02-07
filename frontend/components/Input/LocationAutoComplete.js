import { View, Text } from 'native-base';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { getLocationsByName } from '../../api/map';

export const LocationAutoComplete = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
    ]);
    const [loading, setLoading] = useState(false);

    const handleChange = (text) => {
        setLoading(true);
        debugger;
        getLocationsByName(text)
            .then(result => {
                const [response, error] = result;
                debugger;
                if (response && response.data) {
                    debugger;
                    const data = response.data.map((element, idx) => ({
                        ...element,
                        label: idx + 1 + " " + element.display_name,
                        value: idx,
                        id: idx,
                        key: idx,
                    }));
                    setItems(data);
                }
                setLoading(false);
            })
    }

  return (
        <DropDownPicker
            searchable={true}
            disableLocalSearch={true}
            onChangeSearchText={handleChange}
            loading={loading}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
  );
};

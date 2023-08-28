'use client'
import React from 'react';
import { useStore } from '@/app/stores/StoreContext'; // Path according to your project structure
import { Input } from '@/app/components/generic/Input/Input'; // Adjust the import path

const SpecializedInput: React.FC = () => {
    const { activityStore } = useStore(); // Assuming 'activityStore' is available in your context

    // Example: updating the name of the first activity
    //@ts-ignore
    const firstActivity = activityStore?.activities ? [0] : "";

    const handleChange = (value: string | number) => {
        if (typeof value === 'string' && firstActivity) {
            //@ts-ignore
            activityStore.modifyActivity(firstActivity.id, value);
        }
    };

    return (
        <Input
            type="text"
            // @ts-ignore
            value={firstActivity ? firstActivity.name : ""}
            onValueChange={handleChange}
            additionalClasses="some-class"
        />
    );
};

export default SpecializedInput;

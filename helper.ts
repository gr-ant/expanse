const helper = {

    findValueFields: (obj:Object)=>{
        const ValueFields = {};
        Object.entries(obj).forEach(([key, value]) => {
            if (value) {
                ValueFields[key] = value;
            }
        });
        return ValueFields;
    }

}

export { helper }
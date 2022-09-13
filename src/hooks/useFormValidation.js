export const useFormValidation = (data) => {
    let errors = {};
    let regEx;
    let error;

    for (const key in data) {
        switch (key) {
            case 'name':
                regEx = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
                error = !regEx.test(data[key]);
                break;
            case 'phone':
                regEx = /^[0-9/-]+$/;
                error = !regEx.test(data[key]);
                break;
            case 'email':
                regEx = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
                error = !regEx.test(data[key]);
                break;
            case 'emailRepeat':
                error = !(data[key] === data.email);
                break;
            case 'comments':
                regEx = /^.{0,255}$/;
                error = !regEx.test(data[key]);
                break;
            default:
                error = false;
                break;
        }
        errors = {
            ...errors,
            [`${key}Error`]: error
        }
    }

    return errors
}
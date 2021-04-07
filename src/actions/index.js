export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectedId: peopleId,
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};

export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value },
    };
};

const localIP = '10.0.2.15';
export const createNewPerson = ({
    firstName,
    lastName,
    phone,
    email,
    company,
    project,
    notes,
}) => {
    return (dispatch) => {
        fetch(`http://${localIP}:3000/contact`, {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                company,
                project,
                notes,
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => console.log(response))
            .then(() => {
                dispatch({ type: 'NEW_CONTACT' });
            })
            .catch((error) => console.log(error));
    };
};

export const loadInitialContact = () => {
    return (dispatch) => {
        fetch(`http://${localIP}:3000/contact`)
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'INITIAL_FETCH', payload: data }))
            .catch((error) => console.log(error));
    };
};

export const deleteContact = (contactID) => {
    return (dispatch) => {
        fetch(`http://${localIP}:3000/contact/${contactID}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'DELETE_CONTACT' }))
            .catch((error) => console.log(error));
    };
};

export const updateContact = (person) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: person,
    };
};

export const saveContact = ({
    firstName,
    lastName,
    phone,
    email,
    company,
    project,
    notes,
    _id,
}) => {
    return (dispatch) => {
        fetch(`http://${localIP}:3000/contact/${_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                company,
                project,
                notes,
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => console.log(response))
            .then(() => {
                dispatch({ type: 'SAVE_CONTACT' });
            })
            .catch((error) => console.log(error));
    };
};

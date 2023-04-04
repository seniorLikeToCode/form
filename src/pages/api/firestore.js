import { db } from '../../../firebase/config.js';
import { collection, addDoc } from 'firebase/firestore';

const registerUser = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            ...data
        });
        console.log('here');
        return alert('Form submitted successfully');
    } catch (e) {
        // redirect to error page
        console.log('not here');
        return alert('Error submitting form');
    }
}

export { registerUser };

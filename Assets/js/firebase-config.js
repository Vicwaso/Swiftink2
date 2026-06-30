// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTWBCzMXz1K25zEckP3gN3F9E5PphwbyY",
    authDomain: "swiftink-64a05.firebaseapp.com",
    projectId: "swiftink-64a05",
    storageBucket: "swiftink-64a05.firebasestorage.app",
    messagingSenderId: "693593977308",
    appId: "1:693593977308:web:34ed74e69ee90141a31f19"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to save order to database
async function saveOrderToDatabase(orderData) {
    try {
        const urgency = orderData.urgency === 'Same day' || orderData.urgency === 'Next day';

        const orderToSave = {
            clientName: orderData.clientName || "",
            phone: orderData.phone || "",
            serviceType: orderData.serviceType || "",
            quantity: orderData.quantity || "",
            deadline: orderData.deadline || "",
            message: orderData.message || "",
            urgency: urgency,
            status: 'new',
            createdAt: new Date().toISOString(),
            depositPaid: false,
            balancePaid: false,
            notes: [],
            source: 'website'
        };

        const docRef = await db.collection('orders').add(orderToSave);
        console.log('Order saved to Firebase with ID:', docRef.id);
        return true;
    } catch(error) {
        console.error('Error saving order:', error);
        return false;
    }
}

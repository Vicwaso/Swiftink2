// Firebase Configuration - PASTE YOUR REAL CONFIG HERE
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const swiftinkDB = firebase.firestore();

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
        
        const docRef = await swiftinkDB.collection('orders').add(orderToSave);
        console.log('Order saved with ID:', docRef.id);
        return true;
    } catch(error) {
        console.error('Error saving order:', error);
        return false;
    }
}
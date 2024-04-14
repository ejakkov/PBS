

class validationService {

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(emailRegex.test(email));
        return emailRegex.test(email);
    }

}
export default new validationService();
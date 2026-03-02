// Mock auth.js for InclusiFund Tools
window.InclusiFundAuth = {
    checkSession: function() {
        try {
            return JSON.parse(localStorage.getItem('inclusifund_user'));
        } catch (e) {
            return null;
        }
    },
    setSession: function(user) {
        localStorage.setItem('inclusifund_user', JSON.stringify(user));
    },
    requireAuth: function() {
        const user = this.checkSession();
        if (!user) {
            window.location.href = '/login.html';
        }
        return user;
    },
    logout: function() {
        localStorage.removeItem('inclusifund_user');
        window.location.href = '/login.html';
    }
};

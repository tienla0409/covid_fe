// eslint-disable-next-line
export default function ({ store, redirect }) {
    if (!store.state.auth.loggedIn) {
        return redirect('/home');
    }
}

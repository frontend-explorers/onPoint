const HookCounter = (initialState) => {
let preservedSate = initialState;
  return () => {
    const [count, setCount] = useState(preservedSate);
    useEffect(() => {
      const timer = setInterval(() => setCount(count + 1), 1000);
      return () => {
        preservedSate = count;
        clearInterval(timer);
      }
    });
    return <div>{count}</div>;
  };
};

const globalUserState = { user: null, setUser: user => globalUserState.user = user }

const useAuth = () => {
  if (globalUserState.user === null) { throw new Error('Login Required'); }
  return globalUserState.user;
}

const VIPContent = () => {
  const user = useAuth();
  return <div>YO YO YO!!! {user}</div>;
}

const LoginPage = () => {
  return <div>
    Error<br/>
    <button onClick={() => globalUserState.setUser('gosho')}>login</button>
  </div>
};

class ErrorBoundry extends React.Component {
  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    return this.props.children(this.state.error);
  }
}

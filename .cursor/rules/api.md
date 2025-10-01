# API calls

you use axios for make api calls.
getAll and getOne will be in useEffect like this

```jsx
useEffect(() => {
  (async () => {
    //your api call here
  })()
}, []);
```
const r={get(e,t=null){const o=localStorage.getItem(e);return o?JSON.parse(o):t},set(e,t){localStorage.setItem(e,JSON.stringify(t))},remove(e){localStorage.removeItem(e)}};export{r as S};

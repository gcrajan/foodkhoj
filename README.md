Download the zip file
Open terminal then type npm install

Sources:
Loader: https://www.npmjs.com/package/react-spinners
to use it, 1. npm i react-spinners
           2. import ClipLoader from "react-spinners/ClipLoader";  // choose your loader
              import RingLoader from "react-spinners/RingLoader";  // choose your loader
              // for more loader: https://www.davidhu.io/react-spinners/
           3.   let [loading, setLoading] = useState(true);
                let [color, setColor] = useState("#ffffff"); //your color
           4. <ClipLoader      //use loader as above like RingLoader,HashLoader,Cliploader
                color={color}
                loading={loading}
                size={150}
              />
API: https://www.themealdb.com/api.php
            2 api are used.
            For Display : www.themealdb.com/api/json/v1/1/search.php?s=
            For Id search : www.themealdb.com/api/json/v1/1/lookup.php?i=

If you have any problem feel free to contact @ https://www.linkedin.com/in/rajan-g-c-69a690199/

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
![foodkhoj1](https://github.com/gcrajan/foodkhoj/assets/57903373/3d538f48-def0-4d03-8861-efd198157b51)
![foodkhoj](https://github.com/gcrajan/foodkhoj/assets/57903373/3d35bd3d-e18a-4a3a-a4b0-3409563b1887)

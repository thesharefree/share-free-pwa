import { useDispatch, useSelector } from 'react-redux';

const useReduxHooks = (props: any) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return props?.(state) || null;
    });

    return [state, dispatch];
};

export default useReduxHooks;

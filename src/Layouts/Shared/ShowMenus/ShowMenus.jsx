const ShowMenus = ({menu}) => {
    const {name, recipe, image, price} = menu;
    return (
        <div className='flex gap-4'>
            <img className='w-20 rounded-r-full rounded-b-full' src={image} alt="" />
            <div className='flex gap-3'>
                <div>
                    <h4 className='text-2xl text-slate-600'>{name}---------------</h4>
                    <p className='text-slate-500'>{recipe}</p>
                </div>
                <p className='text-yellow-500'>${price}</p>
            </div>
        </div>
    );
};

export default ShowMenus;
import {memo} from "react";

export const UserInfo = memo(({user}) => {
    console.log('UserInfo render', user)
    //Без React.memo компонент UserInfo перерисовывается с каждым изменением стейта в родительском компоненте App:
    //при любом вводе в инпут поиска и при клике на counter. С React.memo компонент перерисовывается только в случае изменений props user
    return (
        <>
            <h3>Профиль пользователя</h3>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>Активен: {user.isActive? 'Да': 'Нет'}</p>
        </>
    )
})
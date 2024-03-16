export function CardWrapper({children}){
    return <div style = {{border : "2px solid black", padding : 20}}>
        {children}
    </div>
}


// if i dont want to re-render if its props are not changed use React.memo
/**
 const Header = React.memo(function Header({title})){
    return <div>
    {title}
    </div>
 }
 */
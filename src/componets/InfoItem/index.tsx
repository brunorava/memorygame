import * as C from './styles';

type Props = {
    label: string;
    value: string;
}

export const InfoItem = ({ label, value } : Props) => {
    return(
        <C.ContainerInfoItem>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>
        </C.ContainerInfoItem>
    )
}
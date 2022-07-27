import React,{useState} from 'react';
import { Modal } from 'react-native';
import Detalhes from '../Detalhes';

import {

    Container,AreaFilme, TextFilme, Folder, TouchLeiaMais, TextTouch, AreaBtn


} from './styles'

export default function Filmes({data}) {

    const [estadoModal, setEstadoModal] = useState(false);

 return (
    <>
   <Container>
       <AreaFilme>
            <TextFilme>{data.nome}</TextFilme>
            <Folder
            source={{uri: data.foto}}
            />
            
            <AreaBtn>
                <TouchLeiaMais onPress={() => setEstadoModal(true)}>
                    <TextTouch>LEIA MAIS</TextTouch>
                </TouchLeiaMais>
            </AreaBtn>
       </AreaFilme>
    
   </Container>
   
   <Modal
       animationType='slide'
       transparent={true}
       visible={estadoModal}
   >

    <Detalhes filme={data} voltar={() => setEstadoModal(false)}/>

   </Modal>

       </>
       
  );
}
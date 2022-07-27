import React from 'react';
import { View, Text } from 'react-native';

import {
AreaModal, TextFilme, SinopseContent, SinopseTitle, ControlerModal, TouchVoltar, TouchText
}from './styles'

export default function Detalhes({filme,voltar}) {
 return (
   
   <AreaModal>
       <ControlerModal>
           <TouchVoltar onPress={voltar}>
               <TouchText>Voltar</TouchText>
           </TouchVoltar>
            <TextFilme>{filme.nome}</TextFilme>
            <SinopseTitle>Sinopse: </SinopseTitle>
            <SinopseContent>{filme.sinopse}</SinopseContent>
       </ControlerModal>
   </AreaModal>
   
  );
}
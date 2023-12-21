declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }

  declare module 'react-native-document-picker' {
    export interface DocumentPickerResponse {
      uri: string;
      type: string;
      name: string;
      size: number;
    }
  
    export interface DocumentPickerOptions {
      type: string[];
    }
  
    export default class DocumentPicker {
      static pick(options: DocumentPickerOptions): Promise<DocumentPickerResponse>;
      static types: {
        allFiles: string;
        audio: string;
        images: string;
        plainText: string;
        pdf: string;
        video: string;
      };
      static isCancel(err: any): boolean;
    }
  }
  
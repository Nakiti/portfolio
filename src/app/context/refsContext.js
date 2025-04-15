// app/RefsContext.js
'use client';
import { createContext, useContext, useState } from 'react';

export const RefsContext = createContext();

export const useRefs = () => useContext(RefsContext);

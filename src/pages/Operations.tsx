import { useMemo, useState } from "react";
import { X } from 'lucide-react'

import {
  operations,
  type Operation,
} from '../data/operations'

import { OperationCard } from "../components/OperationCard/OperationCard";

import './Operation.css'

type OperationFilter = 
 | 'ALL'
 | 'ACTIVE'
 | 'STANDBY'
 | 'CLASSIFIED'

 export function Operations() {
  const [filter, setFilter] =
  useState<OperationFilter>('ALL')

  const [selectedOpertaion, setSelectedOperation] =
  useState<Operation | null>(null)

  const filteredOperations = useMemo(() => {
    if(filter === 'ALL') {
      return operations
    }

    return operations.filter(
      (operation) => operation.status === filter
    )
  }, [filter])
  
 }
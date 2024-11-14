import React from 'react'
import { Button } from '@mui/material'

export const ButtonsCounter = ({goToPage, currentPage, totalPages}) => {
  return (
    <div>
                <Button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Anterior
                </Button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <>
                    <Button
                      key={index}
                      onClick={() => goToPage(index + 1)}
                      disabled={currentPage === index + 1}
                    >
                      {index + 1}
                    </Button>
                  </>
                ))}
                <Button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                </Button>
              </div>
  )
}

```mermaid
graph TD
    Usuario -->|"Registrar Vehículo"| Registrar_Vehiculo
    Usuario -->|"Generar Tiquet"| Generar_Tiquet
    Usuario -->|"Verificar Disponibilidad"| Verificar_Disponibilidad

    Registrar_Vehiculo --> Verificar_Disponibilidad
    Generar_Tiquet --> Calcular_Coste

```

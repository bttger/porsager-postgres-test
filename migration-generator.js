import { exporter } from '@dbml/core';
import fs from 'fs';

const dbml = fs.readFileSync('./schema.dbml', 'utf8');

const postgres = exporter.export(dbml, 'postgres');

fs.writeFileSync('./migration.sql', postgres);

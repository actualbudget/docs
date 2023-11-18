# DB Migrations Guide

There are some important considerations to make when adding a feature with a db migration.

* DB Migrations also require publishing a new API version as the migrations also need to be applied there.

* The AQL Schema file may need to be updated to match any table changes.

* You must place your migration file in the `loot-core/migrations` folder, with a strict naming convention.

* The naming convention is as follows: `TIMESTAMP_name.sql`. for example. `1694438752000_add_goal_targets.sql`
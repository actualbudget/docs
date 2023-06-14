---
title: 'Updating Actual'
---

## Updating Actual

:::caution Before starting this step, backup your budget! You can find out how to do that [here](#exporting-data-from-actual).
Failure to do this may result in budget loss.
:::

This section focuses on updating the actual-server

Press the start menu or windows key on your keyboard and type **cmd**

![](/img/fly/windows-start-1.png)

when command prompt appears in the search results, **right click** it and run it as **Administrator**

![](/img/fly/windows-start-2.png)

Navigate to the C:\ drive using this command

```cmd
cd C:\
```

![](/img/fly/cmd-1.png)

Assuming you followed this guide before, navigate to the github directory you created to clone
actual and then into the actual-server directory

```cmd
cd github\actual-server
```

![](/img/fly/cmd-26.png)

We now need to clone the latest changes made to the actual-server repo, to do this, run the
following command from your command prompt:

```cmd
git pull origin master
```

![](/img/fly/cmd-25.png)

:::info
As the fly.toml is excluded in the gitignore changes made upstream will not be pulled down, ensure you check the fly.toml against the fly.template.toml using the steps below before proceeding
:::

At this point, open the fly.toml (this should be located in `C:\github\actual-server`) by right clicking on it and selecting `Open` it should open in a text editor. 

Open the fly.template.toml by doing the same steps as above.

Once the two files are open, compare the fly.toml to the fly.template.toml ensuring that everything below the `app = "%NAME%"` is the same. 

Once that is done, run the deployment command to push your changes to fly.

```cmd
flyctl deploy.
```

Once that is complete, [delete your browsing history](https://www.howtogeek.com/304218/how-to-clear-your-history-in-any-browser/)
and web files.

Load up your budget and if required [restore your backup](#importing-data-into-actual) and that is
Actual Server updated.
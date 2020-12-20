#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1.10-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1.404-buster AS build
WORKDIR /src
COPY ["Mortgage.Api/Mortgage.Api.csproj", "Mortgage.Api/"]
RUN dotnet restore "Mortgage.Api/Mortgage.Api.csproj"
COPY . .
WORKDIR "/src/Mortgage.Api"
RUN dotnet build "Mortgage.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Mortgage.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Mortgage.Api.dll"]